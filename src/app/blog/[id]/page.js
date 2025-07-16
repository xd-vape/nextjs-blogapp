import Header from "@/components/header/header";
import { DotPattern } from "@/components/magicui/dot-pattern";
import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";
import Footer from "@/sections/Footer";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({ params }) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: {
      author: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      {/*  */}

      <div className="bg-gradient-to-b from-white to-background w-full h-80 z-5 rounded">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={
            "-z-5 " +
            cn(
              "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
            )
          }
        />
        <div className="bg-white p-6 w-1/3 m-auto mt-35 text-center">
          <h1 className="text-primary font-extrabold text-2xl">{post.title}</h1>
          <span className="text-secondary">Blog von {post.author.name}</span>
        </div>
      </div>

      <div className="bg-white w-1/2 p-6 rounded z-5 shadow">
        {post.content || "Nicht verfügbar!"}
      </div>
      {/*  */}
      <Footer />
    </div>
  );
}
