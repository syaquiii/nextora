import { Product } from "@/shared/type/Tproduct";
import Image from "next/image";
import React, { FC } from "react";

interface CardProps {
  product: Product;
}

const ProductCard: FC<CardProps> = ({ product }) => {
  const formattedDate = new Date(product.releaseDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="w-full h-auto rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl border-gray-100 bg-white">
      {/* Image */}
      <div className="relative w-full aspect-[4/3]">
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200">
            {product.category}
          </span>
        </div>

        <Image
          src={product.path}
          alt={product.title}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 items-center justify-center p-4 text-center">
        <span className="text-sm font-bold line-clamp-1">{product.title}</span>
        <span className="text-xs text-gray-700 font-medium">
          ${product.price}
        </span>

        {/* Meta info */}
        <div className="text-[11px] text-gray-500 flex flex-col items-center mt-2 gap-1">
          <span className="flex items-center gap-1">
            🛒 <span className="font-semibold">{product.sold}</span> sold
          </span>
          <span className="">📅 Released: {formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
