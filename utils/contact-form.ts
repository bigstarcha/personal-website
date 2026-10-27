// Keep these in sync with the maxLength attributes in ConnectSection.
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactForm = { name: string; email: string; message: string };

type SpamCheckResult =
  | { isBot: true; reason: "honeypot" | "malformed" }
  | { isBot: false; form: ContactForm };

/**
 * Checks that only a bot posting straight to the API can fail. The form's own attributes
 * (hidden honeypot, required, maxLength) stop real visitors before any of these could trigger.
 * Returns the trimmed fields when the request looks legitimate.
 */
export function spamBotChecks(body: Record<string, unknown>): SpamCheckResult {
  // Honeypot: a hidden field real visitors never see.
  if (body.website) return { isBot: true, reason: "honeypot" };

  const { name, email, message } = body;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return { isBot: true, reason: "malformed" };
  }
  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return { isBot: true, reason: "malformed" };
  }

  return {
    isBot: false,
    form: { name: name.trim(), email: email.trim(), message: message.trim() },
  };
}

/**
 * Checks that real visitors CAN hit, because the browser's validation lets these through:
 * `required` accepts fields of only spaces, and type="email" accepts addresses like "jane@example".
 * Returns a message to show the visitor, or null if the fields are fine.
 */
export function validateFields({
  name,
  email,
  message,
}: ContactForm): string | null {
  if (!name || !email || !message) return "Please fill out every field.";
  if (!EMAIL_PATTERN.test(email)) return "Please enter a valid email address.";
  return null;
}
