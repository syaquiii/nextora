import { useProductContext } from "@/shared/hooks/useProductContext";
import { Product } from "@/shared/type/Tproduct";

export const useSimilarProducts = (
  category: string,
  excludeId: number | string
): Product[] => {
  const { products } = useProductContext();

  return products.filter((p) => p.category === category && p.id !== excludeId);
};
