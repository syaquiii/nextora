"use client";

import ProductCard from "@/shared/components/Card";
import { Product } from "@/shared/type/Tproduct";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSimilarProducts } from "../hooks/useSimilarProduct";

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  const similarProducts = useSimilarProducts(product.category, product.id);

  return (
    <div className="mycontainer font-sfpro py-10 px-4 md:px-10">
      <Link
        href="/home"
        className="inline-block mb-6 text-sm text-gray-600 hover:text-black border-b border-black pb-1"
      >
        ← Back To Home
      </Link>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Image */}
        <div className="w-full max-w-md">
          <Image
            src={product.path}
            alt={product.title}
            width={600}
            height={600}
            className="w-full max-h-[400px] object-contain "
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {product.title}
          </h2>
          <p className="text-gray-700 mb-4 text-lg">{product.description}</p>

          <div className="mb-6">
            <p className="text-3xl font-semibold text-black">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Sold: {product.sold}</p>
          </div>

          {/* Additional Info */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              <strong>Release Date:</strong> {product.releaseDate}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-sm flex items-center gap-2 text-gray-600">
              <strong>Colors:</strong>{" "}
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className="inline-block w-16 h-4 rounded-md mr-2 border"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className=" hover:bg-gray-800 border w-full cursor-pointer border-black text-black hover:text-white text-sm font-medium rounded-xl px-6 py-3 flex items-center justify-center lg:w-fit gap-3 transition-colors">
            <ShoppingCart size={18} />
            Add To Cart
          </button>
        </div>
      </div>
      <div>
        <h5 className="my-20 text-2xl font-bold">Find Similar Products</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarProducts.length > 0 ? (
            similarProducts.map((item) => (
              <Link key={item.id} href={`/shop/${item.id}`}>
                <ProductCard product={item} />
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No similar products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
