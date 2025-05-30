import HeroContainer from "@/features/Hero/container/HeroContainer";
import ProductInfoContainer from "@/features/ProductInfo/container/ProductInfoContainer";
import ProductListContainer from "@/features/ProductList/container/ProductListContainer";
import SpecialPriceContainer from "@/features/SpecialPrice/container/SpecialPriceContainer";
import React from "react";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroContainer />
      <ProductInfoContainer />
      <ProductListContainer />
      <SpecialPriceContainer />
    </main>
  );
};

export default Home;
