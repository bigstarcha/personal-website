// https://resend.com/docs/send-with-nextjs
// https://www.youtube.com/watch?v=yLvhWObBp9I
"use server";

import { NextResponse } from "next/server";
// import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const recipientEmail = process.env.RECIPIENT_EMAIL_ADDRESS || "";

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
      from: senderEmail,
      to: [recipientEmail],
      subject: `You got a new message from ${senderName}!`,
      text: message,
      // react: EmailTemplate({ name: senderName, message }),
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
