"use client";
import React from "react";
import { useDiscountProducts } from "../hooks/useProductDiscount";
import { DiscountProductLayout } from "../components/DiscountProductLayout";

const ProductDiscountContainer: React.FC = () => {
  const {
    discountProducts,
    loading,
    error,
    calculateSavings,
    formatCurrency,
    totalDiscountProducts,
  } = useDiscountProducts();

  return (
    <section className="min-h-screen w-full  -mt-40">
      <div className="container mx-auto px-4 py-8">
        <DiscountProductLayout
          discountProducts={discountProducts}
          loading={loading}
          error={error}
          calculateSavings={calculateSavings}
          formatCurrency={formatCurrency}
          totalDiscountProducts={totalDiscountProducts}
        />
      </div>
    </section>
  );
};

export default ProductDiscountContainer;
