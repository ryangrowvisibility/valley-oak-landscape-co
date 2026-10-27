import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const head = Figtree({ variable: "--font-head", subsets: ["latin"], weight: ["700", "800"] });
const body = Figtree({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://valley-oak-landscape-co.growlocalvisibility.com"),
  title: "Valley Oak Landscape Co. | Landscaping & Concrete in Bakersfield, CA",
  description:
    "Bakersfield landscaping and concrete for new-construction homes: patios, driveway extensions, sod, sprinklers, curbing, artificial turf and concrete steps. Owner Cristian. 5.0 stars on Google. Lic# 1149218. Call (661) 437-6772.",
  openGraph: {
    title: "Valley Oak Landscape Co. | From Bare Dirt to Backyard in Bakersfield",
    description: "New-home landscaping and concrete in Bakersfield. Call Cristian at (661) 437-6772.",
    type: "website",
    locale: "en_US",
    images: ["/images/p3.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
