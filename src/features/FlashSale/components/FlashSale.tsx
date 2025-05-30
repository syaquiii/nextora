"use client";
import Image from "next/image";
import React from "react";
import FlashSaleImg from "@/assets/image/flashsale.webp";
import { useCountdown } from "../hooks/useCountDown";

const FlashSale: React.FC = () => {
  const { timeLeft, isExpired, formatNumber } = useCountdown(0.01);

  return (
    <div className="w-full h-2/3 overflow-hidden rounded-xl shadow-2xl -mt-40 relative">
      <Image
        className="absolute w-full h-full object-cover"
        src={FlashSaleImg}
        alt="flash sale"
        priority
      />
      <div className="absolute w-full h-full font-sfpro text-white bg-black/40 flex flex-col justify-center items-center space-y-4">
        <span className="text-4xl font-bold italic tracking-wide">
          Flash Sale
        </span>
        <span className="text-2xl font-semibold">
          Get 25% off - Limited Time Offer!
        </span>

        {!isExpired ? (
          <div className="flex flex-col items-center space-y-3">
            <div className="text-lg font-medium">Hurry! Sale ends in:</div>
            <div className="flex space-x-4 text-center">
              <div className="bg-black/60 rounded-lg px-3 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">
                  {formatNumber(timeLeft.days)}
                </div>
                <div className="text-xs uppercase tracking-wide">Days</div>
              </div>
              <div className="flex items-center text-2xl font-bold">:</div>
              <div className="bg-black/60 rounded-lg px-3 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">
                  {formatNumber(timeLeft.hours)}
                </div>
                <div className="text-xs uppercase tracking-wide">Hours</div>
              </div>
              <div className="flex items-center text-2xl font-bold">:</div>
              <div className="bg-black/60 rounded-lg px-3 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">
                  {formatNumber(timeLeft.minutes)}
                </div>
                <div className="text-xs uppercase tracking-wide">Min</div>
              </div>
              <div className="flex items-center text-2xl font-bold">:</div>
              <div className="bg-black/60 rounded-lg px-3 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">
                  {formatNumber(timeLeft.seconds)}
                </div>
                <div className="text-xs uppercase tracking-wide">Sec</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-2">
            <div className="text-xl font-bold text-red-400">
              ⏰ Sale Expired!
            </div>
            <div className="text-lg">Dont miss our next amazing offer!</div>
          </div>
        )}

        <button
          className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
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
