import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Header";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS first app",
  description: "Created by Emiliano Navarro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <div className="flex min-h-screen w-full items-center justify-center bg-blue-950">
          <div className="flex w-96 flex-col gap-2 border p-2 sm:w-[480px] md:w-[720px]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
