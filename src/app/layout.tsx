import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recursive Boxes",
  description: "Recursive Boxes Server Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black`}>{children}</body>
    </html>
  );
}
