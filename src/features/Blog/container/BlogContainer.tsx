import React from "react";
import { blogPosts } from "../data/blogdata";
import BlogCart from "../components/BlogCard";

const BlogContainer = () => {
  return (
    <section className="min-h-[30rem] grid grid-cols-1 lg:grid-cols-3 gap-6 mycontainer py-20">
      {blogPosts.map((post) => (
        <BlogCart key={post.id} data={post} />
      ))}
    </section>
  );
};

export default BlogContainer;
