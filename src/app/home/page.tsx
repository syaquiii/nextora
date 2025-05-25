import HeroContainer from "@/features/Hero/container/HeroContainer";
import ProductInfoContainer from "@/features/ProductInfo/container/ProductInfoContainer";
import ProductListContainer from "@/features/ProductList/container/ProductListContainer";
import React from "react";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroContainer />
      <ProductInfoContainer />
      <ProductListContainer />
    </main>
  );
};

export default Home;
