import React, { FC } from "react";
import { BlogPost } from "../data/blogdata";
import Image from "next/image";

interface BlogCartInterface {
  data: BlogPost;
}

const BlogCard: FC<BlogCartInterface> = ({ data }) => {
  return (
    <div className="w-full h-[20rem] font-sfpro">
      <div className="bg-amber-100 h-3/4 overflow-hidden">
        <Image
          className="w-full"
          src={data.image}
          alt="#"
          width={400}
          height={400}
        />
      </div>
      <div>
        <p className="text-xl font-semibold mt-2">{data.title}</p>
        <p className=" text-gray-500 mt-2 text-lg">{data.excerpt}</p>
        <span className="underline font-extralight">Read More</span>
      </div>
    </div>
  );
};

export default BlogCard;
