import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Header";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
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
    <html lang="en" className="dark">
      <body className={`${robotoMono.className} antialiased dark:bg-slate-950 `}>
        <div className="flex min-h-screen w-full items-center justify-center">
          <div className="flex w-[450px] flex-col gap-2 p-2 md:w-[720px]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
