import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrolToTop";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "سمیرا بصیری کیا | نقاش، خطاط و مدرس خوشنویسی در تهران",
  description: "پورتفولیو سمیرا بصیری کیا — نقاش سبک رئال، خطاط با مدرک ممتاز انجمن خوشنویسان ایران، مدرس خوشنویسی نستعلیق و تذهیب در تهران",
  keywords: ["خوشنویسی", "نقاشی رئال", "تذهیب", "مدرس خوشنویسی تهران", "سمیرا بصیری کیا"],
  openGraph: {
    title: "سمیرا بصیری کیا | نقاش و خطاط",
    description: "نقاش سبک رئال، خطاط و مدرس خوشنویسی با سابقه برگزاری نمایشگاه‌های انفرادی و گروهی",
    url: "https://samira-bk-portfolio.vercel.app",
    locale: "fa_IR",
    type: "website",
  },
  verification: {
    google: "GGnpcobZ4JLmCOjAYINONAyastq92OmSjTXnFUN1eJE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} antialiased bg-[#28286b]`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}