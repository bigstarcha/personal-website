// https://resend.com/docs/send-with-nextjs
// https://www.youtube.com/watch?v=yLvhWObBp9I
"use server";

import { NextResponse } from "next/server";
// import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const recipientEmail = process.env.RECIPIENT_EMAIL_ADDRESS || "";

// Resend only sends from a domain you've verified. Until I own one, fall back to
// their test address (which can only deliver to my own Resend account email).
const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(req: Request) {
  try {
    const { name: senderName, email: senderEmail, message } = await req.json();

    if (!senderName || !senderEmail || !message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: senderName, senderEmail, or message.",
        },
        { status: 400 },
      );
    }

    if (!recipientEmail) {
      return NextResponse.json(
        { error: "Recipient email address is not configured." },
        { status: 500 },
      );
    }

    const result = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: senderEmail,
      subject: `You got a new message from ${senderName}!`,
      text: `From: ${senderName} <${senderEmail}>\n\n${message}`,
      // react: EmailTemplate({ name: senderName, message }),
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
