import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

function BottomNav() {
  return null;
}

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "رفيق",
  description: "رفيقك في رحلتك إلى الله",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {children}

        <BottomNav />
      </body>
    </html>
  );
}