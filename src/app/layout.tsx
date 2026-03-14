import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/FloatingNav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Topbar } from "@/components/Topbar";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VAIBHAV SINGH | Overview",
  description: "BCom (Hons) student interested in quant trading, strategy consulting, and investment banking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${ibmPlexMono.variable} font-mono antialiased text-[13px] leading-relaxed`}>
        <InteractiveBackground />
        <Topbar />
        <SmoothScroll>
          <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 mb-20">
            {children}
          </div>
          <FloatingNav />
        </SmoothScroll>
      </body>
    </html>
  );
}
