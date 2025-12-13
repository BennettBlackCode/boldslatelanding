import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { NavbarProvider } from "@/components/NavbarContext";
import FacebookPixel from "@/components/FacebookPixel";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bold Slate | AI Consulting for Small Businesses",
  description: "We build AI powered systems for small to medium sized marketing agencies that automate key processes to help you scale.",
  icons: {
    icon: "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Bold%20Slate%20Logo%20(3).png",
    apple: "https://ojiytsplzyffdgobssut.supabase.co/storage/v1/object/public/Assets/Bold%20Slate%20Logo%20(3).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${outfit.variable} antialiased bg-white text-body`}
      >
        <FacebookPixel />
        <NavbarProvider>
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}
