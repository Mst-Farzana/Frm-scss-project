import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "FRM/W | Architecture & Design Studio",
  description: "A minimalist architecture portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
