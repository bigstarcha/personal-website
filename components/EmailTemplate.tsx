import React from "react";

export function EmailTemplate({
  name,
  message,
}: {
  name: string;
  message: string;
}) {
  return (
    // Pretty cheap template that I will probably update in the future.
    <div className="bg-foreground">
      <h2 className="text-2xl font-bold mb-4">
        You received a new message from {name}!
      </h2>
      <p className="mb-4">
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
