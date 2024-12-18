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
        <div className="flex items-center justify-center w-full min-h-screen bg-gray-600">
          <div className="flex flex-col border sm:w-2/3 xl:w-1/2 p-2">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
