import "./globals.css";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

/* ✅ LUXURY SERIF FONT */
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nakoda Jewellers",
  description: "Premium Jewellery Showroom",
  viewport: "width=device-width, initial-scale=1", // ✅ IMPORTANT FOR MOBILE
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <div className="pt-20 md:pt-24">
          {children}
        </div>

        {/* WHATSAPP FLOATING BUTTON */}
        <a
          href="https://wa.me/918106444207"
          target="_blank"
          className="
            fixed 
            bottom-4 right-4 md:bottom-6 md:right-6
            bg-green-500 text-white 
            px-4 py-2 md:px-5 md:py-3
            text-sm md:text-base
            rounded-full shadow-lg 
            hover:scale-110 transition 
            z-50
          "
        >
          WhatsApp Us
        </a>

      </body>
    </html>
  );
}