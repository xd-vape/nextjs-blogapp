"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { slugify } from "./utils";
import { redirect } from "next/navigation";
import { signUp } from "./auth-client";
import { signInSchema, signUpSchema } from "./zod/schema";
import { auth } from "./auth";
import { headers } from "next/headers";

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

export const createUser = async (prevState, formData) => {
  const { name, email, password, passwordConfirm } = formData;

  const result = signUpSchema.safeParse({
    name,
    email,
    password,
    passwordConfirm,
  });

  if (!result.success) {
    return {
      errors: formatZodErrors(result.error),
    };
  }

  try {
    const response = await signUp.email({
      name: name,
      email: email,
      password: password,
    });

    return response;
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error);
    return {
      error: {
        message:
          "Es gab einen Fehler bei der Registrierung. Bitte versuche es später erneut.",
        code: "REGISTRATION_ERROR",
      },
    };
  }
};

export const signUser = async (prevState, formData) => {
  const { email, password } = formData;

  const result = signInSchema.safeParse({
    email,
    password,
  });

  if (!result.success) {
    return {
      errors: formatZodErrors(result.error),
    };
  }

  try {
    await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email,
        password,
      },
    });

    return { error: null };
  } catch (error) {
    console.error("Authentifizierungsfehler:", error.message);

    return {
      error: {
        message: "Falsche E-Mail oder Passwort",
      },
    };
  }
};

// Formatierung der Zod Fehler für die Anzeige im Formular
const formatZodErrors = (error) => {
  const formattedErrors = {};
  error.errors.forEach((err) => {
    formattedErrors[err.path[0]] = err.message; // Zod gibt die Fehler auf Basis der Input-Felder zurück
  });
  return formattedErrors;
};
