import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/NavBar";
import FloatingButtons from "./components/layout/FlotingButtions";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEART - School of Embryology",
  description: "Clinical Embryology Training Institute",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar/>
        <Navbar/>
        {children}
        <FloatingButtons/>
      </body>
    </html>
  );
}
