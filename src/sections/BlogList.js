import Item from "@/components/list/item";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

export default async function BlogList() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  function getExcerpt(content, maxLength = 130) {
    if (!content) return "";
    const plainText = content.replace(/(<([^>]+)>)/gi, ""); // HTML-Tags entfernen (optional)
    return plainText.length > maxLength
      ? plainText.slice(0, maxLength).trim() + "..."
      : plainText;
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
      {/* <Item
        title={"Test Title"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        }
        createdAt={"01.01.2000"}
        image={"https://placehold.co/320x200/WebP"}
      />
      <Item
        title={"Test Title"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        }
        createdAt={"01.01.2000"}
        image={"https://placehold.co/320x200/WebP"}
      />
      <Item
        title={"Test Title"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        }
        createdAt={"01.01.2000"}
        image={"https://placehold.co/320x200/WebP"}
      /> */}
    </div>
  );
}
