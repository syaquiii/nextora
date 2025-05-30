import React from "react";
import SpecialPrice1 from "../components/SpecialPrice1";
import SpecialPrice2 from "../components/SpecialPrice2";

const SpecialPriceContainer = () => {
  return (
    <section className="h-screen  pb-20 lg:pb-0 mycontainer">
      <div className="lg:h-1/2  h-full grid grid-cols-1  lg:grid-cols-2 gap-10 ">
        <SpecialPrice1 />
        <SpecialPrice2 />
      </div>
    </section>
  );
};

export default SpecialPriceContainer;
