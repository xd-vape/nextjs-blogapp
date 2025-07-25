import { slugify } from "@/lib/utils";
import prisma from "@/lib/prisma";

export async function POST(req) {
  const data = await req.json();
  const { title, content, authorId } = data;

  const slug = slugify(title);

  const post = await prisma.post.create({
    data: {
      title,
      content,
      slug,
      authorId,
    },
  });

  return new Response(JSON.stringify(post), { status: 201 });
}
