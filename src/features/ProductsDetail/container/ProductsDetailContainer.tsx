import { useParams } from "next/navigation";
import { useProductDetail } from "@/shared/hooks/useProductDetail";
import ProductDetail from "../components/ProductDetails";

export const ProductsDetailContainer = () => {
  const params = useParams();
  const rawId = params.detail as string;
  const numericId = Number(rawId);

  // Always call the hook, but pass a safe value
  const product = useProductDetail(isNaN(numericId) ? 0 : numericId);

  // Handle invalid ID case
  if (isNaN(numericId)) {
    return <div className="text-red-600 p-4">Invalid product ID.</div>;
  }

  // Handle product not found case
  if (!product) {
    return <div className="text-red-600 p-4">Product not found.</div>;
  }

  return <ProductDetail product={product} />;
};
