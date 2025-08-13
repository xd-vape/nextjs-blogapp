import Item from "@/components/list/item";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import RemoveMarkdown from "remove-markdown";
import striptags from "striptags";

export default async function BlogList() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  function getExcerpt(markdown, maxLength = 130) {
    const noMarkdown = RemoveMarkdown(markdown || "");
    const noHtml = striptags(noMarkdown);
    const cleanText = noHtml.replace(/\n+/g, " ").trim();

    return cleanText.length > maxLength
      ? cleanText.slice(0, maxLength) + "..."
      : cleanText;
  }

  return (
    <div className="w-auto grid grid-cols-3 gap-5 mt-5 z-10">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <Item
            title={post.title}
            desc={
              getExcerpt(post.content) ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
            }
            createdAt={new Date(post.created).toLocaleDateString("de-DE")}
            image={post.image || "https://placehold.co/320x200/WebP"}
          />
        </Link>
      ))}
    </div>
  );
}
