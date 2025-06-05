const directUnsplashUrls = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  "https://images.unsplash.com/photo-1615971677499-5467cbab01c0",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
];

import React from "react";
import RandomImageCard from "../components/RandomImageCard";

const FollowUsContainer = () => {
  return (
    <section className="font-sfpro py-20">
      <div className="mycontainer">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[4px] w-14 bg-red-900"></div>
          <span>Follow Us</span>
          <div className="h-[4px] w-14 bg-red-900"></div>
        </div>
        <h4 className="text-center text-3xl font-bold mt-4 mb-8">
          Follow Us On Our Instagram
        </h4>
      </div>

      {/* Auto-fit grid layout */}
      <div className="w-full px-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {directUnsplashUrls.map((imageUrl, index) => (
            <RandomImageCard key={index} image={imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FollowUsContainer;
