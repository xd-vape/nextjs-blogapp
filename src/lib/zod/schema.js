import z from "zod";

export const createBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string(),
});
