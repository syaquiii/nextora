"use client";
import { productsData } from "@/shared/data/products";
import { Product } from "@/shared/type/Tproduct";
import { useEffect, useState } from "react";

export interface DiscountProduct extends Product {
  originalPrice: number;
  discount: number;
}

export interface UseDiscountProductsReturn {
  discountProducts: DiscountProduct[];
  loading: boolean;
  error: string | null;
  calculateSavings: (originalPrice: number, currentPrice: number) => number;
  formatCurrency: (amount: number) => string;
  totalDiscountProducts: number;
}
export const useDiscountProducts = (): UseDiscountProductsReturn => {
  const [discountProducts, setDiscountProducts] = useState<DiscountProduct[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const filteredProducts = productsData.filter(
        (product): product is DiscountProduct =>
          product.discount !== undefined &&
          product.originalPrice !== undefined &&
          product.discount > 0 &&
          product.originalPrice > 0
      );

      setDiscountProducts(filteredProducts);
      setLoading(false);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      setLoading(false);
    }
  }, []);

  // Calculate savings
  const calculateSavings = (
    originalPrice: number,
    currentPrice: number
  ): number => {
    return originalPrice - currentPrice;
  };

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return {
    discountProducts,
    loading,
    error,
    calculateSavings,
    formatCurrency,
    totalDiscountProducts: discountProducts.length,
  };
};
