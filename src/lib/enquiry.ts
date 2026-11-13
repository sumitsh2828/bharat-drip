import { site, whatsappLink } from "@/data/site";

export type EnquiryEntry = { label: string; value: string };

export type Enquiry = {
  subject: string;
  entries: EnquiryEntry[];
  replyTo?: string;
};

export function enquiryText(e: Enquiry) {
  return [e.subject, "", ...e.entries.filter((x) => x.value.trim()).map((x) => `${x.label}: ${x.value.trim()}`)].join("\n");
}

export function mailtoHref(e: Enquiry) {
  const body = enquiryText(e).split("\n").slice(2).join("\n");
  return `${site.email.href}?subject=${encodeURIComponent(e.subject)}&body=${encodeURIComponent(body)}`;
}

export function whatsappHref(e: Enquiry) {
  return whatsappLink(enquiryText(e));
}

/** Reads every named control of a form into labelled entries, in DOM order. */
export function readForm(form: HTMLFormElement): EnquiryEntry[] {
  const out: EnquiryEntry[] = [];
  const seen = new Map<string, EnquiryEntry>();
  for (const el of Array.from(form.elements)) {
    if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) continue;
    if (!el.name || el.dataset.skip !== undefined) continue;
    if (el instanceof HTMLInputElement && (el.type === "checkbox" || el.type === "radio")) {
      if (!el.checked) continue;
      const label = el.closest("fieldset")?.querySelector("legend")?.textContent?.trim() ?? el.name;
      const prev = seen.get(el.name);
      if (prev) prev.value += `, ${el.value}`;
      else {
        const entry = { label, value: el.value };
        seen.set(el.name, entry);
        out.push(entry);
      }
      continue;
    }
    const label = ((el.id && form.querySelector(`label[for="${el.id}"]`)?.textContent) || el.name).replace(/\s*\*\s*$/, "").trim();
    out.push({ label, value: el.value });
  }
  return out;
}
