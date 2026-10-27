import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ConnectEmailProps {
  username: string;
  replyToEmail: string;
  message: string;
}

export const WelcomeEmail = ({
  username,
  replyToEmail,
  message,
}: ConnectEmailProps) => (
  <Html lang="en">
    <Head>
      {/** Apple Mail and some others load this; Gmail strips it and falls back to the system fonts below. */}
      {/** This lint rule is for Next.js pages and doesn't apply to emails. */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Merriweather+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
    {/** The inbox snippet shown next to the subject line. */}
    <Preview>
      {username} sent you a message: {message.slice(0, 80)}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={tag}>Connect With Me!</Text>
        <Section style={card}>
          <Text style={heading}>Hi Tim,</Text>
          <Text style={text}>
            {username} (
            <Link href={`mailto:${replyToEmail}`} style={link}>
              {replyToEmail}
            </Link>
            ) wants to connect with you! See their message below.
          </Text>
          <Hr style={divider} />
          <Text style={messageText}>{message}</Text>
          <Hr style={divider} />
          <Section style={buttonRow}>
            <Button
              href={`mailto:${replyToEmail}?subject=${encodeURIComponent("Re: Your message on my website")}`}
              style={button}
            >
              Reply to {username}
            </Button>
          </Section>
        </Section>
        <Text style={footer}>
          Sent from the contact form on your website. Hitting reply in your
          inbox also goes straight to {username}.
        </Text>
      </Container>
    </Body>
  </Html>
);

WelcomeEmail.PreviewProps = {
  username: "Jane Doe",
  replyToEmail: "jane@example.com",
  message:
    "Hi Tim! I came across your portfolio and loved the photo diary.\n\nWould you be open to a quick chat?",
} satisfies ConnectEmailProps;

export default WelcomeEmail;

// Colors mirror the theme tokens in app/globals.css. Email clients can't read CSS variables, so they're inlined.
const colors = {
  background: "#121212",
  foreground: "#fdfdfd",
  tertiary: "#1d4ed8",
  quaternary: "#e3ecfc",
  muted: "#9ca3af",
};

const sansFont = "'Merriweather Sans', Helvetica, Arial, sans-serif";
const serifFont = "Merriweather, Georgia, 'Times New Roman', serif";

const main = {
  backgroundColor: colors.background,
  fontFamily: sansFont,
  padding: "32px 0",
};

const container = { margin: "0 auto", padding: "0 16px", maxWidth: "580px" };

// Same pill look as the tags on project and experience cards.
const tag = {
  display: "inline-block",
  margin: "0 0 16px",
  padding: "4px 12px",
  borderRadius: "9999px",
  backgroundColor: colors.quaternary,
  color: colors.tertiary,
  fontSize: "14px",
  lineHeight: "20px",
};

// Same light card with rounded corners as the site's sections.
const card = {
  backgroundColor: colors.foreground,
  borderRadius: "12px",
  padding: "8px 32px 24px",
};

const heading = {
  fontFamily: serifFont,
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "32px",
  color: colors.background,
};

const text = { fontSize: "16px", lineHeight: "26px", color: colors.background };

const link = { color: colors.tertiary, textDecoration: "underline" };

const divider = { borderColor: colors.quaternary, margin: "20px 0" };

// pre-wrap keeps the line breaks the sender typed.
const messageText = { ...text, whiteSpace: "pre-wrap" as const };

const buttonRow = { textAlign: "right" as const };

// Matches the "Send Message" button on the contact form.
const button = {
  backgroundColor: colors.background,
  color: colors.foreground,
  borderRadius: "6px",
  padding: "10px 24px",
  fontSize: "16px",
  textDecoration: "none",
};

const footer = {
  fontSize: "12px",
  lineHeight: "18px",
  color: colors.muted,
  textAlign: "center" as const,
  marginTop: "16px",
};
