"use client";
import Image from "next/image";
import React from "react";
import FlashSaleImg from "@/assets/image/flashsale.webp";
import { useCountdown } from "../hooks/useCountDown";

const FlashSale: React.FC = () => {
  const { timeLeft, isExpired, formatNumber } = useCountdown(0.01);

  return (
    <div className="w-full h-2/3 min-h-[300px] sm:min-h-[400px] overflow-hidden rounded-xl shadow-2xl -mt-20 sm:-mt-40 relative">
      <Image
        className="absolute w-full h-full object-cover"
        src={FlashSaleImg}
        alt="flash sale"
        priority
      />
      <div className="absolute w-full h-full font-sfpro text-white bg-black/40 flex flex-col justify-center items-center space-y-3 sm:space-y-4 px-4">
        <span className="text-2xl sm:text-4xl font-bold italic tracking-wide text-center">
          Flash Sale
        </span>
        <span className="text-lg sm:text-2xl font-semibold text-center px-2">
          Get 25% off - Limited Time Offer!
        </span>

        {!isExpired ? (
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 w-full">
            <div className="text-sm sm:text-lg font-medium text-center">
              Hurry! Sale ends in:
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-center max-w-full">
              <div className="bg-black/60 rounded-lg px-2 sm:px-3 py-2 min-w-[50px] sm:min-w-[60px]">
                <div className="text-lg sm:text-2xl font-bold">
                  {formatNumber(timeLeft.days)}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wide">
                  Days
                </div>
              </div>
              <div className="flex items-center text-lg sm:text-2xl font-bold">
                :
              </div>
              <div className="bg-black/60 rounded-lg px-2 sm:px-3 py-2 min-w-[50px] sm:min-w-[60px]">
                <div className="text-lg sm:text-2xl font-bold">
                  {formatNumber(timeLeft.hours)}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wide">
                  Hours
                </div>
              </div>
              <div className="flex items-center text-lg sm:text-2xl font-bold">
                :
              </div>
              <div className="bg-black/60 rounded-lg px-2 sm:px-3 py-2 min-w-[50px] sm:min-w-[60px]">
                <div className="text-lg sm:text-2xl font-bold">
                  {formatNumber(timeLeft.minutes)}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wide">
                  Min
                </div>
              </div>
              <div className="flex items-center text-lg sm:text-2xl font-bold">
                :
              </div>
              <div className="bg-black/60 rounded-lg px-2 sm:px-3 py-2 min-w-[50px] sm:min-w-[60px]">
                <div className="text-lg sm:text-2xl font-bold">
                  {formatNumber(timeLeft.seconds)}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wide">
                  Sec
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-2 px-4">
            <div className="text-lg sm:text-xl font-bold text-red-400">
              ⏰ Sale Expired!
            </div>
            <div className="text-base sm:text-lg">
              Don't miss our next amazing offer!
            </div>
          </div>
        )}

        <button
          className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 ${
            isExpired
              ? "bg-gray-600 cursor-not-allowed opacity-60"
              : "bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black shadow-lg hover:shadow-xl"
          }`}
          disabled={isExpired}
        >
          {isExpired ? "Sale Ended" : "Shop Now!"}
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
