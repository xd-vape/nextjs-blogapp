import Header from "@/components/header/header";
import prisma from "@/lib/prisma";
import Footer from "@/sections/Footer";
import React from "react";

export default async function page() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  // console.log(posts);

  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      {/*  */}
      <div className="mt-55">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <span className="font-semibold">{post.title}</span>
              <span className="text-sm text-gray-600 ml-2">
                by {post.author.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/*  */}
      <Footer />
    </div>
  );
}
