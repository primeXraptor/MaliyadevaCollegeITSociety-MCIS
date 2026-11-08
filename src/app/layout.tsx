import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/ui";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "MCIS — Maliyadeva College IT Society",
    template: "%s | MCIS",
  },
  description:
    "A space for learning, building, and innovation at Maliyadeva College, Kurunegala.",
  openGraph: {
    title: "MCIS — Maliyadeva College IT Society",
    description: "Curiosity connects us. Technology moves us forward.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
