import type { Metadata, Viewport } from "next";
import "./globals.css";

const publicSiteUrl =
  process.env.GITHUB_PAGES === "true"
    ? "https://hi1124565801-ai.github.io"
    : "https://yunmoxiao-field-notes.fairy-gnat-3713.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title: {
    default: "Yunmoxiao Tian | Research, Writing & Photography",
    template: "%s | Yunmoxiao Tian",
  },
  description:
    "Yunmoxiao Tian is a Peking University undergraduate studying English Language and Literature and Sociology, with research interests in cultural sociology, consumer sociology, communication, organizations, urban life, and digital platforms.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Yunmoxiao Tian | Research, Writing & Photography",
    description:
      "Peking University undergraduate studying English Language and Literature and Sociology, with research across culture, organizations, urban life, communication, and digital platforms.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Yunmoxiao Tian — academic portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunmoxiao Tian | Research, Writing & Photography",
    description:
      "Academic research, long-form journalism, photography, and independent literary mapping.",
    images: ["/og.png"],
  },
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
