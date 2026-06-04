import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Agrandir Regular - has built-in light and bold
const agrandir = localFont({
  src: "./assets/fonts/Agrandir/Agrandir-Regular.otf",
  variable: "--font-agrandir",
  display: "swap",
});

// Agrandir Grand Light
const agrandirGrandLight = localFont({
  src: "./assets/fonts/Agrandir/Agrandir-GrandLight.otf",
  variable: "--font-agrandir-grandl",
  display: "swap",
});

// Agrandir Grand Heavy
const agrandirGrandHeavy = localFont({
  src: "./assets/fonts/Agrandir/Agrandir-GrandHeavy.otf",
  variable: "--font-agrandir-grandh",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VPCL - Vibe Coding Premier League",
  description: "India's First Franchise-Based Vibe Coding Competition. Get Drafted. Build. Win.",
  icons: {
    icon: "/Beyond-Icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${agrandir.variable} ${agrandirGrandLight.variable} ${agrandirGrandHeavy.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
