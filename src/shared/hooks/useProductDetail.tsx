import { Product } from "../type/Tproduct";
import { useProductContext } from "./useProductContext";

export const useProductDetail = (id: number | string): Product | undefined => {
  const { products } = useProductContext();

  return products.find((product) => product.id === id);
};
