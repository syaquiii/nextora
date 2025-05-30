import React from "react";
import DiscountProductCard from "./DiscountProductCard";
import { DiscountProduct } from "../hooks/useProductDiscount";

interface DiscountProductLayoutProps {
  discountProducts: DiscountProduct[];
  loading: boolean;
  error: string | null;
  calculateSavings: (originalPrice: number, currentPrice: number) => number;
  formatCurrency: (amount: number) => string;
  totalDiscountProducts: number;
}

export const DiscountProductLayout: React.FC<DiscountProductLayoutProps> = ({
  discountProducts,
  loading,
  error,
  calculateSavings,
  formatCurrency,
  totalDiscountProducts,
}) => {
  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading discount products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Error loading products: {error}</p>
        </div>
      </div>
    );
  }

  if (discountProducts.length === 0) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p>No discount products available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-6">
      <div className="mb-6 px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Todays Deals</h2>
        <p className="text-gray-600">
          {totalDiscountProducts} products with special discounts
        </p>
      </div>

      <div className="relative">
        <div className="flex flex-col lg:flex-row gap-6 px-6 overflow-x-auto  pb-4">
          {discountProducts.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-full lg:w-1/3"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <DiscountProductCard
                product={product}
                calculateSavings={calculateSavings}
                formatCurrency={formatCurrency}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
