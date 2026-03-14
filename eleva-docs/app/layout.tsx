import type { Metadata, Viewport } from "next";
import { LocaleProvider } from "@/contexts/LocaleContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eleva CRM API 2.0 Docs",
  description: "Complete API documentation for Eleva CRM. Build integrations, automate workflows, and extend your CRM.",
  openGraph: {
    title: "Eleva CRM API 2.0 Docs",
    description: "Complete API documentation for Eleva CRM. Build integrations, automate workflows, and extend your CRM.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
