import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  image: string;
}

const RandomImageCard: FC<IProps> = ({ image }) => {
  return (
    <div className="relative w-full h-[8rem] overflow-hidden rounded-lg shadow-md group">
      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Image
        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-hover:blur-[2px]"
        width={400}
        height={400}
        alt="Random image"
        src={image}
        priority={false}
        quality={75}
      />
    </div>
  );
};

export default RandomImageCard;
