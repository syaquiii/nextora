import React from "react";
import { DiscountProduct } from "../hooks/useProductDiscount";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

interface DiscountProductCardProps {
  product: DiscountProduct;
  calculateSavings: (originalPrice: number, currentPrice: number) => number;
  formatCurrency: (amount: number) => string;
}

const DiscountProductCard: React.FC<DiscountProductCardProps> = ({
  product,
  calculateSavings,
  formatCurrency,
}) => {
  const savings = calculateSavings(product.originalPrice, product.price);

  const getColorStyle = (color: string): React.CSSProperties => {
    const colorMap: Record<string, string> = {
      beige: "#F5F5DC",
      "walnut brown": "#8B4513",
      glass: "#E6E6FA",
      charcoal: "#36454F",
    };

    return {
      backgroundColor: colorMap[color] || color,
    };
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y5ZmFmYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2YjczODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+";
  };

  const handleAddToCart = (): void => {
    console.log(`Added ${product.title} to cart`);
  };

  return (
    <div className="bg-[#D9D9D9] font-sfpro grid grid-cols-2 p-4 w-full min-h-[22rem] rounded-xl hover:shadow-xl transition-all duration-300 group">
      <div className="bg-white rounded-xl flex items-end relative overflow-hidden">
        <Image
          src={product.path}
          alt={product.title}
          width={500}
          height={500}
          className="transition-transform duration-500 group-hover:scale-105"
          onError={handleImageError}
        />
        <span className="absolute text-sm px-2 py-1 rounded-xl bg-primary-400 text-white top-2 left-2 shadow-md">
          {product.discount}% off
        </span>
        <div className="absolute right-2 top-2">
          <div className="flex flex-col gap-2">
            <button className="rounded-full bg-[#D9D9D9] p-2 text-lg hover:bg-white hover:text-red-500 transition-all duration-200 hover:scale-110 shadow-md">
              <Heart />
            </button>
            <button className="rounded-full bg-[#D9D9D9] p-2 text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-110 shadow-md">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-xl tracking-tight font-bold group-hover:text-blue-600 transition-colors duration-200">
          {product.title}
        </h4>
        <div className="flex gap-2 items-center">
          <div className="relative w-fit">
            <span className="opacity-60">${product.originalPrice}</span>
            <div className="absolute w-full h-[3px] top-3 -rotate-15 bg-red-600"></div>
          </div>
          <div className="font-bold text-lg">${product.price}</div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-gray-700">
          {product.description}
        </p>
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 mt-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 hover:shadow-lg active:scale-95"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default DiscountProductCard;
