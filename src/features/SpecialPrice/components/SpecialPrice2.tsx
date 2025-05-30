import Image from "next/image";
import React from "react";
import Sprice2 from "@/assets/image/sprice2.png";

const SpecialPrice2 = () => {
  return (
    <div className="w-full h-full relative overflow-hidden shadow-lg rounded-lg group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
      <Image
        className="absolute w-full top-0 transition-transform duration-700 group-hover:scale-110"
        src={Sprice2}
        alt="ayam"
      />
      <div className="absolute h-full w-full flex flex-col gap-1 bg-black/30 font-sfpro text-white justify-center items-center transition-all duration-500 group-hover:bg-black/40">
        <span className="font-extralight tracking-wider text-sm opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1">
          SPECIAL PRICE
        </span>
        <h5 className="text-2xl font-bold transform transition-all duration-500 group-hover:scale-105 group-hover:text-yellow-300">
          Autumn Lounge
        </h5>
        <button className="mt-2 px-6 py-2 border border-white/50 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:border-white transform hover:scale-105 active:scale-95 backdrop-blur-sm">
          EXPLORE MORE
        </button>
      </div>

      <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-1000"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default SpecialPrice2;
