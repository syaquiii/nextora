import { ArrowRightFromLine } from "lucide-react";
import Image from "next/image";
import React from "react";
import Lamp from "@/assets/image/heroLamp.svg";

const Hero = () => {
  return (
    <div className="font-sfpro border-white w-screen relative h-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 flex text-white mycontainer">
      <div className="z-10 max-w-full lg:max-w-3xl xl:max-w-4xl">
        <span className="font-bold text-sm sm:text-base tracking-wide">
          NEW ARRIVALS
        </span>
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl my-3 sm:my-4 lg:my-6 leading-tight font-bold">
          Timeless Designs for Inspired Living.
        </h4>
        <button className="flex items-center gap-2 sm:gap-3 bg-primary-600 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-12 lg:py-6 xl:px-12 xl:py-6 rounded-sm text-sm sm:text-base lg:text-lg font-medium hover:bg-primary-700 transition-colors duration-300">
          Shop Now{" "}
          <ArrowRightFromLine className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
      <div className="absolute -right-4 sm:-right-6 md:-right-8 lg:right-2 xl:right-4 top-0 z-0">
        <Image
          className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] 2xl:w-[32rem] h-auto object-contain"
          alt="lamp"
          src={Lamp}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
