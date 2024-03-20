import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import Cursor from "./components/Cursor";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Ashish Sahu",
    default: "Ashish Sahu",
  },
  description: "Check out my smart portfolio website with a custom AI chatbot.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <Cursor/>
          <main>{children}</main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}