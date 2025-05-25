import { useContext } from "react";
import { ProductContext } from "../Context/ProductsContext";

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
