"use client";
import { useProductContext } from "@/shared/hooks/useProductContext";
import React, { useState } from "react";
import ProductListLayout from "../components/ProductListLayout";

type TabType = "TREND" | "NEW";

const ProductListContainer = () => {
  const { products } = useProductContext();
  const [activeTab, setActiveTab] = useState<TabType>("TREND");

  // Sort berdasarkan tab aktif
  const sortedProducts = [...products].sort((a, b) => {
    if (activeTab === "TREND") {
      return b.sold - a.sold;
    } else {
      return (
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
    }
  });

  // Batasi ke 8 produk saja
  const limitedProducts = sortedProducts.slice(0, 8);

  return (
    <ProductListLayout
      products={limitedProducts}
      activeTab={activeTab}
      onChangeTab={setActiveTab}
    />
  );
};

export default ProductListContainer;
