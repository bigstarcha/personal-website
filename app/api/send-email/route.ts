// https://resend.com/docs/send-with-nextjs
// https://www.youtube.com/watch?v=yLvhWObBp9I

import { NextResponse } from "next/server";
import { WelcomeEmail } from "@/components/emails/WelcomeEmail";
import { spamBotChecks, validateFields } from "@/utils/contact-form";
import { getClientIp, isRateLimited } from "@/utils/rate-limiting";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const recipientEmail = process.env.RECIPIENT_EMAIL_ADDRESS || "";

// Resend only sends from a domain you've verified. Until I own one, fall back to
// their test address (which can only deliver to my own Resend account email).
const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

// Every error the visitor can see goes through here, so no internal details leak to the browser.
function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return errorResponse("Invalid request.", 400);
  }

  const spamCheck = spamBotChecks(body);
  if (spamCheck.isBot) {
    // Honeypot bots get a fake success so they don't learn to skip the field.
    return spamCheck.reason === "honeypot"
      ? NextResponse.json({ ok: true })
      : errorResponse("Invalid request.", 400);
  }

  const fieldError = validateFields(spamCheck.form);
  if (fieldError) return errorResponse(fieldError, 400);

  const { name: senderName, email: senderEmail, message } = spamCheck.form;

  // Checked after validation so typos don't use up someone's attempts.
  if (isRateLimited(getClientIp(req))) {
    return errorResponse(
      "You've sent a few messages already. Please try again in a few minutes.",
      429,
    );
  }

  if (!recipientEmail) {
    console.error("send-email: RECIPIENT_EMAIL_ADDRESS is not configured.");
    return errorResponse("Something went wrong. Please try again later.", 500);
  }

  // Newlines in a name could mess with the subject line, so flatten them.
  const subjectName = senderName.replace(/\s+/g, " ");

  try {
    // Resend reports API failures in `error` instead of throwing.
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: senderEmail,
      subject: `You got a new message from ${subjectName}!`,
      text: `From: ${senderName} <${senderEmail}>\n\n${message}`,
      react: WelcomeEmail({
        username: senderName,
        replyToEmail: senderEmail,
        message,
      }),
    });

    if (error) {
      console.error("send-email: Resend rejected the email.", error);
      return errorResponse(
        "Something went wrong. Please try again later.",
        502,
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("send-email: failed to send.", error);
    return errorResponse("Something went wrong. Please try again later.", 500);
  }
}
