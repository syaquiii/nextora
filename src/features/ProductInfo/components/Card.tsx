"use client";
import { TProductInfo } from "@/features/Hero/type/TProductInfo";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

interface ICardProductInfo {
  props: TProductInfo;
}

const CardProductInfo: FC<ICardProductInfo> = ({ props }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full h-72 lg:h-96 flex flex-col gap-2 items-center py-6 relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      style={{ backgroundColor: props.backgroundColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="font-bold text-xl text-opacity-90">{props.title}</span>
      <Link href={"#"} className="underline font-semibold text-sm">
        Shop now
      </Link>
      <Image
        className="w-2/3 transition-opacity duration-500"
        alt="image"
        src={props.image}
      />

      {/* Deskripsi hanya di bagian bawah */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-black/50 text-white text-center p-2 transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {props.description}
      </div>
    </div>
  );
};

export default CardProductInfo;
