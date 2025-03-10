import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import "./globals.css";
import { NotesProvider } from "./context/notesContext";
import { ImageAnalysisProvider } from "./context/imageAnalysisContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f9fafc]`}
      >
        <Header />
        <main className="h-screen px-4 md:px-10">
          <NotesProvider>
            <ImageAnalysisProvider>{children}</ImageAnalysisProvider>
          </NotesProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
