"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { slugify } from "./utils";
import { redirect } from "next/navigation";

export const createPost = async (prevState, formData) => {
  const { title, content, image } = formData;

  try {
    await prisma.post.create({
      data: {
        title,
        content,
        image,
        slug: slugify(title),
        authorId: 4,
      },
    });
  } catch (error) {
    console.error("[POST CREATE] Fehler:", error);
  }

  revalidatePath("/blog");
  redirect(`/blog/${slugify(title)}`);
};
