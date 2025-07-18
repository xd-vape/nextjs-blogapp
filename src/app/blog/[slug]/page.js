import React from "react";
import Header from "@/components/header/header";
import Footer from "@/sections/Footer";
import { DotPattern } from "@/components/magicui/dot-pattern";
import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // oder ein anderer Style

export default async function Page({ params }) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: { slug: slug },
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
        <div className="prose prose-neutral dark:prose-invert max-w-none w-full">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content || "Nicht verfügbar!"}
          </ReactMarkdown>
        </div>
      </div>
      {/*  */}
      <Footer />
    </div>
  );
}
