import type { Metadata, Viewport } from "next";
import {
  createPageMetadata,
  getVerificationMetadata,
  homeDescription,
  homeTitle,
  publicAssetUrl,
  seoConfig,
} from "@/config/seo";
import "./globals.css";

const defaultMetadata = createPageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  profile: true,
});

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(seoConfig.canonicalSiteUrl),
  title: {
    default: homeTitle,
    template: "%s",
  },
  alternates: undefined,
  manifest: publicAssetUrl("/site.webmanifest"),
  icons: {
    icon: publicAssetUrl("/favicon.png"),
    shortcut: publicAssetUrl("/favicon.png"),
    apple: publicAssetUrl("/apple-touch-icon.png"),
  },
  verification: getVerificationMetadata(),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F3F0E7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
