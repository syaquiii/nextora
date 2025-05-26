import type { Metadata } from "next";
import "../styles/globals.css";
import { sfProDisplay } from "@/shared/utils/font";
import Navbar from "@/shared/components/Navbar";
import { ProductProvider } from "@/shared/Context/ProductsContext";
import Footer from "@/shared/components/Footer";
import BottomNavbar from "@/shared/components/BottomNavbar";

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
        <ProductProvider>
          <Navbar />
          {children}
          <BottomNavbar />
          <Footer />
        </ProductProvider>
      </body>
    </html>
  );
}
