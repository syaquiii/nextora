"use client";
import React, { createContext, useEffect, useState, ReactNode } from "react";
import { Product } from "../type/Tproduct";
import { productsData } from "../data/products";

type ProductContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Ambil data dari JSON lokal
    setProducts(productsData as Product[]);
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
