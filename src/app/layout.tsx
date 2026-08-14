import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjun Mijar — Full-Stack Developer",
  description:
    "Portfolio of Arjun Mijar — BSc. CSIT student and full-stack developer building practical web applications with React, Next.js, TypeScript, and ASP.NET Core.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
