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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <h1 className="text-primary font-extrabold text-3xl">{post.title}</h1>
        </div>
      </div>

      <div className="w-1/3 flex flex-col gap-5">
        <div className="prose prose-neutral dark:prose-invert max-w-none w-full">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={([rehypeHighlight], [rehypeRaw])}
          >
            {post.content || "Nicht verfügbar!"}
          </ReactMarkdown>
        </div>
        <hr />
        <div className="flex items-center gap-2">
          <div>
            <Avatar className="h-8 w-8 bg-white shadow-2xl">
              <AvatarImage src="" alt={"User Logo"} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col line-">
            <span className="text-primary text-base">
              Erstellt von {post.author.name}
            </span>
            <span className="text-secondary text-sm">
              {new Date(post.created).toLocaleDateString("de-DE")}
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <Footer />
    </div>
  );
}
