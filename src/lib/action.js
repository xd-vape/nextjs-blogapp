"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { slugify } from "./utils";

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

    revalidatePath("/");
  } catch (error) {
    console.error("[POST CREATE] Fehler:", error);
  }
};
