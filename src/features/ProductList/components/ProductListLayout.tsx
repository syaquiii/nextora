import { Product } from "@/shared/type/Tproduct";
import React, { FC } from "react";
import ProductCard from "../../../shared/components/Card";
import ProductListNavbar from "./ProductListNavbar";
import Link from "next/link";

interface ProductListLayoutProps {
  products: Product[];
  activeTab: "TREND" | "NEW";
  onChangeTab: (tab: "TREND" | "NEW") => void;
}

const ProductListLayout: FC<ProductListLayoutProps> = ({
  products,
  activeTab,
  onChangeTab,
}) => {
  return (
    <section className="mycontainer min-h-screen w-full pb-20">
      <h5 className="text-2xl font-bold mb-6 text-center">Product List</h5>

      <ProductListNavbar activeTab={activeTab} onChange={onChangeTab} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 w-full gap-8 px-4">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductListLayout;
