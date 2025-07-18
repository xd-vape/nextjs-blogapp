import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // Entfernt Akzentzeichen
    .replace(/[\u0300-\u036f]/g, "") // Entfernt diakritische Zeichen
    .replace(/[^a-z0-9 -]/g, "") // Entfernt Sonderzeichen
    .trim()
    .replace(/\s+/g, "-") // Ersetzt Leerzeichen durch "-"
    .replace(/-+/g, "-"); // Entfernt doppelte "-"
}
