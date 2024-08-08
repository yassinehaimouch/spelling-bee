import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bee.gitcoder.me"),
  title: "Spelling Bee",
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Yassine Haimouch",
    description: "Spelling Bee By Yassine Haimouch (@gitcoder).",
    url: "https://bee.gitcoder.me",
    siteName: "Spelling Bee",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
