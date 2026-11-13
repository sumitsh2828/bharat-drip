import { site } from "@/data/site";
import { enquiryText, type Enquiry } from "@/lib/enquiry";

/**
 * Emails a quote request.
 *
 * Configure with environment variables (see README):
 *   RESEND_API_KEY   – API key from resend.com
 *   ENQUIRY_TO       – inbox that receives enquiries (defaults to the site email)
 *   ENQUIRY_FROM     – verified sender, e.g. "Bharat Drip <quotes@bharatdrip.com>"
 *
 * When no provider is configured the route answers 501 and the browser falls
 * back to opening the visitor's email app with the enquiry pre-filled.
 */
export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = (await request.json()) as Enquiry;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body?.subject || !Array.isArray(body.entries) || body.entries.length > 60) {
    return Response.json({ error: "Invalid enquiry" }, { status: 400 });
  }

  const entries = body.entries
    .filter((e) => typeof e?.label === "string" && typeof e?.value === "string")
    .map((e) => ({ label: e.label.slice(0, 120), value: e.value.slice(0, 4000) }));

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email delivery is not configured" }, { status: 501 });
  }

  const text = enquiryText({ subject: body.subject.slice(0, 200), entries });
  const replyTo = typeof body.replyTo === "string" && /.+@.+\..+/.test(body.replyTo) ? body.replyTo : undefined;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM ?? "Bharat Drip website <onboarding@resend.dev>",
      to: [process.env.ENQUIRY_TO ?? site.email.display],
      subject: body.subject.slice(0, 200),
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    return Response.json({ error: "Email provider rejected the message" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
