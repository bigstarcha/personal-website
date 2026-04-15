// https://www.reddit.com/r/nextjs/comments/12p94t6/how_do_i_add_multiple_fonts_using_nextfont/

import type { Metadata } from "next";
import {
  Merriweather,
  Merriweather_Sans,
} from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const merriweather_sans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-mw-sans",
});

export const metadata: Metadata = {
  title: "Tim Cha",
  description: "Navigation metadata for my website.",
  viewport: "width=device-width, initial-scale=1.0", // Make the website responsive
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${merriweather_sans.variable} `}>
        <main className="font-mw-sans">{children}</main>
      </body>
    </html>
  );
}
