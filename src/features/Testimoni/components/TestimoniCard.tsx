import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface TestimoniCardProps {
  data: {
    name: string;
    role: string;
    avatar: string | StaticImport;
    rating: number;
    testimoni: string;
  };
}

const TestimoniCard = ({ data }: TestimoniCardProps) => {
  return (
    <div className="w-full min-h-[20rem] flex flex-col md:flex-row gap-6 md:gap-4 items-center p-6 md:px-10 font-sfpro bg-white rounded-2xl shadow-xl">
      <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full flex-shrink-0">
        <Image
          className="scale-110"
          width={200}
          height={200}
          src={data.avatar}
          alt={`${data.name}'s avatar`}
        />
      </div>
      <div className="text-center md:text-left">
        <p className="font-bold text-lg md:text-xl">{data.name}</p>
        <p className="text-sm md:text-base text-gray-600">{data.role}</p>

        <div className="flex gap-1 my-2 justify-center md:justify-start">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-3 h-3 md:w-4 md:h-4 ${
                index < data.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <p className="mt-4 text-sm md:text-base">{data.testimoni}</p>
      </div>
    </div>
  );
};

export default TestimoniCard;
