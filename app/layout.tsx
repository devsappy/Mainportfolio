import type { Metadata } from "next";
import { Space_Grotesk, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import ClientOnly from "@/components/ClientOnly";
import CustomCursor from "@/components/CustomCursor";
import { CursorProvider } from "@/contexts/CursorContext";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});

const ubuntu = Ubuntu({ 
  subsets: ["latin"],
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: "Sappy | Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Audiowide&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/bastliga-one" rel="stylesheet" />
      </head>
      <body className={`${spaceGrotesk.variable} ${ubuntu.variable} font-space-grotesk cursor-none`} suppressHydrationWarning>
        <CursorProvider>
          <ClientOnly>
            <CustomCursor />
            <Particles />
          </ClientOnly>
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </CursorProvider>
      </body>
    </html>
  );
}