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
    <div className="w-full h-auto rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-[1.03] hover:shadow-lg sm:hover:shadow-xl  bg-white hover:shadow-2xl hover:border-gray-200 group cursor-pointer">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {/* Category Badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 transition-all duration-300 group-hover:scale-105">
          <span className="bg-gradient-to-r from-slate-50 to-gray-50 text-slate-700 text-[9px] sm:text-[10px] lg:text-xs font-semibold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg border border-slate-200/80 backdrop-blur-sm  group-hover:shadow-md group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-50 transition-all duration-300">
            {product.category}
          </span>
        </div>

        <Image
          src={product.path}
          alt={product.title}
          fill
          className="object-contain p-3 sm:p-4 transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 items-center justify-center p-3 sm:p-4 text-center transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-slate-50/30">
        <span className="text-xs sm:text-sm font-bold line-clamp-1 leading-tight transition-colors duration-300 group-hover:text-slate-800">
          {product.title}
        </span>
        <span className="text-xs sm:text-sm text-gray-700 font-semibold transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105">
          ${product.price}
        </span>

        {/* Meta info */}
        <div className="text-[9px] sm:text-[11px] text-gray-500 flex flex-col items-center mt-1.5 sm:mt-2 gap-0.5 sm:gap-1 transition-all duration-300 group-hover:text-gray-600">
          <span className="flex items-center gap-1 transition-transform duration-300 group-hover:scale-105">
            <span className="text-[8px] sm:text-[10px] transition-transform duration-300 group-hover:scale-110">
              🛒
            </span>
            <span className="font-semibold">{product.sold}</span> sold
          </span>
          <span className="flex items-center gap-1 transition-transform duration-300 group-hover:scale-105">
            <span className="text-[8px] sm:text-[10px] transition-transform duration-300 group-hover:scale-110">
              📅
            </span>
            Released: {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
