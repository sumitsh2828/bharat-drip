import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { site } from "@/data/site";
import { enquiryText, type Enquiry } from "@/lib/enquiry";

/**
 * Emails a quote request through Amazon SES (ap-south-1, domain bharatdrip.com).
 * Credentials come from the Amplify compute role; optional overrides:
 *   ENQUIRY_TO       – inbox that receives enquiries (defaults to the site email)
 *   ENQUIRY_FROM     – sender on the verified domain
 *
 * If SES fails the route answers 502 and the form shows its error state.
 */
const ses = new SESv2Client({ region: "ap-south-1" });

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

  const text = enquiryText({ subject: body.subject.slice(0, 200), entries });
  const replyTo = typeof body.replyTo === "string" && /.+@.+\..+/.test(body.replyTo) ? body.replyTo : undefined;

  const subject = body.subject.slice(0, 200);
  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: process.env.ENQUIRY_FROM ?? "Bharat Drip website <quotes@bharatdrip.com>",
        Destination: { ToAddresses: [process.env.ENQUIRY_TO ?? site.email.display] },
        ReplyToAddresses: replyTo ? [replyTo] : undefined,
        Content: { Simple: { Subject: { Data: subject }, Body: { Text: { Data: text } } } },
      }),
    );
  } catch (err) {
    console.error("SES send failed", err);
    return Response.json({ error: "Email provider rejected the message" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
