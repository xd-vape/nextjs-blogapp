import z from "zod";

export const createBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string(),
});

export const signUpSchema = z
  .object({
    name: z.string().min(3, "Username muss mindestens 3 Zeichen haben"),
    email: z.email("Ungültige E-Mail-Adresse"),
    password: z.string().min(4, "Passwort muss mindestens 8 Zeichen lang sein"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwörter stimmen nicht überein!",
    path: ["passwordConfirm"],
  });
