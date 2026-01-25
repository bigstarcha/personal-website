"use client";

import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-background py-3">
      <p className="text-foreground mx-auto text-center text-md">
        &copy; {new Date().getFullYear()} Tim Cha. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
