import type { Metadata } from "next";
import "../styles/globals.css";
import { sfProDisplay } from "@/shared/utils/font";
import Navbar from "@/shared/components/Navbar";

export const metadata: Metadata = {
  title: "Nextora",
  description: "ayam goreng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${sfProDisplay.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
