import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
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
        <div className="flex h-screen min-h-screen flex-col place-content-center">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
