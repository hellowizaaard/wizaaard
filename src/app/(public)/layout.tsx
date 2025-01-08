import type { Metadata } from "next";
import "@styles/globals.css";
import Navbar from "@/components/public/shared/Navbar";
import Footer from "@/components/public/shared/Footer";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Home",
  description: "Wizard",
};

export default function PublicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)] universal-padding">{children}</main>
      <Footer />
    </div>
  );
}
