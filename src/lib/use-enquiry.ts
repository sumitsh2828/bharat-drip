"use client";

import { useState } from "react";
import { mailtoHref, readForm, type Enquiry } from "./enquiry";

export type EnquiryStatus = "idle" | "sending" | "sent" | "mailto" | "error";

/**
 * Sends the enquiry to /api/enquiry (which emails it when an email provider
 * is configured). If the server can't send, falls back to the visitor's own
 * email app with everything pre-filled, so no enquiry is ever lost.
 */
export function useEnquiry(subject: (entries: ReturnType<typeof readForm>) => string) {
  const [status, setStatus] = useState<EnquiryStatus>("idle");

  async function submit(form: HTMLFormElement) {
    if (!form.reportValidity()) return;
    const entries = readForm(form);
    const enquiry: Enquiry = {
      subject: subject(entries),
      entries,
      replyTo: entries.find((e) => /email/i.test(e.label))?.value,
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      if (res.status === 501) {
        window.location.href = mailtoHref(enquiry);
        setStatus("mailto");
        return;
      }
      setStatus("error");
    } catch {
      window.location.href = mailtoHref(enquiry);
      setStatus("mailto");
    }
  }

  function snapshot(form: HTMLFormElement): Enquiry {
    const entries = readForm(form);
    return { subject: subject(entries), entries };
  }

  return { status, setStatus, submit, snapshot };
}
